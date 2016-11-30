<?php
namespace FurlaBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		
		exit;
	}

	public function isloginAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		return $this->statusPrint(1, $user);
	}


	public function callbackAction() {
		// $user_agent = $_SERVER['HTTP_USER_AGENT'];
		// if (strpos($user_agent, 'MicroMessenger') === false) {
		//     // 非微信浏览器禁止浏览
		//     echo "HTTP/1.1 401 Unauthorized";
		//     exit;
		// }
		$request = $this->Request();
		$fields = array(
			'openid' => array('notnull', '3')
		);
		$request->validation($fields);
		$openid = $request->query->get('openid');
		$userapi = new \Lib\UserAPI();
		$userapi->userLogin($openid);
		$url = isset($_SESSION['redirect_url']) ? $_SESSION['redirect_url'] : "/";
		$this->redirect($url);
		exit;
	}

	public function getdataAction() {
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];	
		$data = json_decode($data, true);
		$databaseapi = new \Lib\DatabaseAPI();
		$databaseapi->regUser($data['data']['openid'], $data['data']['nickname'], $data['data']['headimgurl']);
	}

	public function cardAction() {
		//600 pKCDxjrwNnpwUXTcyqzi2R3NZRCQ
		//800 pKCDxjm3GDEKbK19j_SH7VqFAaag
		$card = array('600'=>'pKCDxjtaUHbKIVnION9gD1rW6cGI', '800'=>'pKCDxji7MvlTj_JtzqeUtXFJEd6s');
		//$card = array('600'=>'pGXbRsjjVihQHceLiRMgpFWDkNtU', '800'=>'pGXbRssyzDNSGX7qa6D689Vi_700');
		//$card = array('600'=>'pKCDxji6wCVuB38LBgBTx3U2yBoQ', '800'=>'pKCDxji6wCVuB38LBgBTx3U2yBoQ');
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$databaseapi = new \Lib\DatabaseAPI();
		$type = $databaseapi->checkuser($user->openid);
		if (!$type) {
			return $this->statusPrint(2, '非VIP');
		}
		$wechatapi = new \Lib\WechatAPI();
		$list = $wechatapi->cardList($card[$type]);
		return $this->statusPrint(1, $list);
	}

	public function savecardAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'choose1' => array('notnull', '3'),
			'choose2' => array('notnull', '3'),
			'choose3' => array('notnull', '3'),
			'touser' => array('notnull', '3'),
			'wish' => array('notnull', '3'),
			'fromuser' => array('notnull', '3')
		);
		$request->validation($fields);
		$choose1 = $request->query->get('choose1');
		$choose2 = $request->query->get('choose2');
		$choose3 = $request->query->get('choose3');
		$touser = $request->query->get('touser');
		$wish = $request->query->get('wish');
		$fromuser = $request->query->get('fromuser');
		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->savecard($user->id, $choose1, $choose2, $choose3, $touser, $wish, $fromuser);
		return $this->statusPrint(1, $rs);
	}

	public function loadcardAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'id' => array('notnull', '3')
		);
		$request->validation($fields);
		$id = $request->query->get('id');
		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->loadcard($id);
		return $this->statusPrint(1, $rs);
	}

	public function cardlotteryAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->cardlottery($user->id);
		if ($rs) {
			return $this->statusPrint(1, '中奖');
		}
		return $this->statusPrint(2, '未中奖');
	}

	public function giftlotteryAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->giftlottery($user->id);
		if ($rs) {
			return $this->statusPrint(1, '中奖');
		}
		return $this->statusPrint(2, '未中奖');
	}

	public function infoAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'name' => array('notnull', '3'),
			'mobile' => array('mobile', '3'),
			'address' => array('notnull', '3')
		);
		$request->validation($fields);
		$name = $request->request->get('name');
		$mobile = $request->request->get('mobile');
		$address = $request->request->get('address');
		$databaseapi = new \Lib\DatabaseAPI();
		$databaseapi->info($user->id, $name, $mobile, $address);
		return $this->statusPrint(1, '提交成功');
	}


}
