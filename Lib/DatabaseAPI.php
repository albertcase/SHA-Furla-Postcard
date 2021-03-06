<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct() {
		$this->inidb();
	}

	public function inidb() {
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
		$this->db->query("set names utf8");
	}

	public function insertUser($openid) {
		$user = $this->findUserByOpenid($openid);
		if ($user) {
			return $user;
		}
		$sql = "INSERT INTO `furla_info` SET `openid` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $openid);
		if ($res->execute()) {
			return $this->findUserByOpenid($openid);
		} else {
			return FALSE;
		}
	}

	public function regUser($openid, $nickname, $headimgurl) {

		if ($this->findUserByOauth($openid)) {
			return TRUE;
		}
		$sql = "INSERT INTO `furla_oauth` SET `openid` = ?, nickname = ?, headimgurl = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $openid, $nickname, $headimgurl);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function findUserByOauth($openid) {
		$sql = "SELECT id  FROM `furla_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid);
		if($res->fetch()) {
			return TRUE;
		}
		return FALSE;
	}

	public function findUserByOpenid($openid) {
		$sql = "SELECT `id` FROM `furla_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($id);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->id = $id;
			$user->openid = $openid;
			$_SESSION['user'] = $user;
			return $user;
		}
		return NULL;
	}

	public function checkuser($openid) {
		$sql = "SELECT `type` FROM `furla_vip` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($type);
		if($res->fetch()) {
			return $type;
		}
		return 0;
	}

	public function savecard($uid, $choose1, $choose2, $choose3, $touser, $wish, $fromuser) {
		$sql = "INSERT INTO `furla_card` SET `uid` = ?, choose1 = ?, choose2 = ?, choose3 = ?, touser = ?, wish = ?, fromuser = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sssssss", $uid, $choose1, $choose2, $choose3, $touser, $wish, $fromuser);
		if ($res->execute()) {
			return $res->insert_id;
		} else {
			return FALSE;
		}
	}

	public function loadcard($id) {
		$sql = "SELECT `uid`, `choose1`, `choose2`, `choose3`, `touser`, `wish`, `fromuser`, DATE_FORMAT(`createtime`,'%Y年%m月%d日') FROM `furla_card` WHERE `id` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $id);
		$res->execute();
		$res->bind_result($uid, $choose1, $choose2, $choose3, $touser, $wish, $fromuser, $date);
		if($res->fetch()) {
			$obj = new \stdClass();
			$obj->uid = $uid;
			$obj->choose1 = $choose1;
			$obj->choose2 = $choose2;
			$obj->choose3 = $choose3;
			$obj->touser = $touser;
			$obj->wish = $wish;
			$obj->fromuser = $fromuser;
			$obj->date = $date;
			$obj->gift = $this->loadgift($id);
			return $obj;
		}
		return NULL;
	}

	public function cardlottery($uid) {
		$sql = "SELECT `id` FROM `furla_lottery` WHERE `uid` = ? and status=1 and type = 1"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $uid);
		$res->execute();
		$res->bind_result($rs);
		if ($res->fetch()) {
			$status = 0;
		} else {
			//设置概率
			$cardnum = $this->cardnum();
			if ($cardnum>=102) {
				$status = 0;
			} else {
				$status = 0;
				$rand = mt_rand(1, 100);
				if ($rand <= 15) {
					$status = 1;
				}
			}
		}
		return $this->savelottery($uid, $status, 1);
	}

	private function savelottery($uid, $status, $type) {
		$this->inidb();
		$sql = "INSERT INTO `furla_lottery` SET `uid` = ?, status = ?, type = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $uid, $status, $type);
		if ($res->execute()) {
			return $status;
		} else {
			return FALSE;
		}
	}

	private function cardnum() {
		$this->inidb();
		$sql = "select count(*) from `furla_lottery` where status=1";
		$res = $this->db->prepare($sql); 
		$res->execute();
		$res->bind_result($rs);
		if ($res->fetch()) {
			return $rs;
		} else {
			return 0;
		}
	}

	public function loadgift($pid) {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return 0;
		}
		$this->inidb();
		$sql = "SELECT `id` FROM `furla_gift` WHERE `uid` = ? and pid=?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("ss", $user->id, $pid);
		$res->execute();
		$res->bind_result($rs);
		if ($res->fetch()) {
			return 1;
		} else {
			return 0;
		}
	}

	public function giftlottery($pid, $uid) {
		$sql = "SELECT `id` FROM `furla_gift` WHERE `uid` = ? and pid=?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("ss", $uid, $pid);
		$res->execute();
		$res->bind_result($rs);
		if ($res->fetch()) {
			return 0;
		} else {
			//设置概率
			$giftnum = $this->giftnum();
			if ($giftnum>=140) {
				$status = 0;
			} else {
				$status = 0;
				$rand = mt_rand(1, 100);
				if ($rand <= 15) {
					$status = 1;
				}
			}
			
		}
		return $this->savegift($pid, $uid, $status);
	}

	private function savegift($pid, $uid, $status) {
		$this->inidb();
		$sql = "INSERT INTO `furla_gift` SET `pid` = ?, `uid` = ?, status = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $pid, $uid, $status);
		if ($res->execute()) {
			return $status;
		} else {
			return FALSE;
		}
	}

	private function giftnum() {
		$this->inidb();
		$sql = "select count(*) from `furla_gift` where status=1";
		$res = $this->db->prepare($sql); 
		$res->execute();
		$res->bind_result($rs);
		if ($res->fetch()) {
			return $rs;
		} else {
			return 0;
		}
	}

	public function info($uid, $firstname, $secondname, $areanumber, $mobile, $address, $email, $issend) {
		$sql = "UPDATE `furla_info` SET firstname = ?, secondname = ?, areanumber = ?, mobile = ?, address = ?, email = ?, issend = ? where id = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ssssssss", $firstname, $secondname, $areanumber, $mobile, $address, $email, $issend, $uid);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

}
