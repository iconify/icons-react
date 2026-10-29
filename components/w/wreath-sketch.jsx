import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xjngmlclx.css';
import '../../css/j/jil-jubio.css';
import '../../css/h/hsq8okbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xjngmlclx"/><path class="jil-jubio wm-k"/><path class="hsq8okbmq wm-a"/></g>`,
		"fallback": "withicons:wreath-sketch",
	});
}

export default Component;
