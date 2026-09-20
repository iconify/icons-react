import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0yxk0-pj.css';
import '../../css/g/gl9qqh_kw.css';
import '../../css/z/zxxx85blj.css';
import '../../css/n/nns-klk_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q0yxk0-pj"/><path class="gl9qqh_kw"/><path class="zxxx85blj"/><path class="nns-klk_e"/></g>`,
		"fallback": "streamline-ultimate:webcam-2",
	});
}

export default Component;
