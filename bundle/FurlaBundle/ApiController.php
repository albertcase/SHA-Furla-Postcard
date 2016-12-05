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
		$card = 'pwk3ljgUYhaPdQy-vrCX3GpmVFpc';
		$wechatapi = new \Lib\WechatAPI();
		$list = $wechatapi->cardList($card);
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
		$choose1 = $request->request->get('choose1');
		$choose2 = $request->request->get('choose2');
		$choose3 = $request->request->get('choose3');
		$touser = $request->request->get('touser');
		$wish = $request->request->get('wish');
		$fromuser = $request->request->get('fromuser');
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
		$id = $request->request->get('id');
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
		$request = $this->Request();
		$fields = array(
			'id' => array('notnull', '3')
		);
		$request->validation($fields);
		$id = $request->request->get('id');
		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->giftlottery($id, $user->id);
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
			'firstname' => array('notnull', '3'),
			'secondname' => array('notnull', '3'),
			'areanumber' => array('notnull', '3'),
			'mobile' => array('mobile', '3'),
			'address' => array('notnull', '3'),
			'issend' => array('notnull', '3')
		);
		$request->validation($fields);
		$firstname = $request->request->get('firstname');
		$secondname = $request->request->get('secondname');
		$areanumber = $request->request->get('areanumber');
		$mobile = $request->request->get('mobile');
		$address = $request->request->get('address');
		$email = $request->request->get('email');
		$issend = $request->request->get('issend');
		$databaseapi = new \Lib\DatabaseAPI();
		$databaseapi->info($user->id, $firstname, $secondname, $areanumber, $mobile, $address, $email, $issend);
		return $this->statusPrint(1, '提交成功');
	}


}
