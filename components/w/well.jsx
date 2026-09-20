import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw5-8bntt.css';
import '../../css/h/hzh-nhhxi.css';
import '../../css/n/nab94-b5r.css';
import '../../css/s/szdw0lbyi.css';
import '../../css/q/qfvdoibad.css';
import '../../css/g/g2hys0b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw5-8bntt"/><path class="hzh-nhhxi"/><path class="nab94-b5r"/><path class="szdw0lbyi"/><path class="qfvdoibad"/><path class="g2hys0b1d"/>`,
		"fallback": "token:well",
	});
}

export default Component;
