<?php

$routers = array();
$routers['/'] = array('FurlaBundle\Site', 'index');
$routers['/card'] = array('FurlaBundle\Site', 'card');
$routers['/callback'] = array('FurlaBundle\Api', 'callback');
$routers['/api/card'] = array('FurlaBundle\Api', 'card');