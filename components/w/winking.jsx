import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/w/wzk08x7vl.css';
import '../../css/w/wmv80ebvk.css';
import '../../css/y/yzebgjlak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="wzk08x7vl"/><path class="wmv80ebvk"/><path class="yzebgjlak"/>`,
		"fallback": "fxemoji:winking",
	});
}

export default Component;
