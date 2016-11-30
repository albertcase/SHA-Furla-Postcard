<?php

$routers = array();
$routers['/'] = array('FurlaBundle\Site', 'index');
$routers['/callback'] = array('FurlaBundle\Api', 'callback');
$routers['/api/card'] = array('FurlaBundle\Api', 'card');
$routers['/api/savecard'] = array('FurlaBundle\Api', 'savecard');
$routers['/api/loadcard'] = array('FurlaBundle\Api', 'loadcard');
$routers['/api/cardlottery'] = array('FurlaBundle\Api', 'cardlottery');
$routers['/api/giftlottery'] = array('FurlaBundle\Api', 'giftlottery');
$routers['/api/info'] = array('FurlaBundle\Api', 'info');