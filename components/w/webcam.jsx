import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g1st-obsh.css';
import '../../css/s/sm1jugbqc.css';
import '../../css/y/ytopibb5c.css';
import '../../css/c/c1ksu6uqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="g1st-obsh"/><path class="sm1jugbqc"/><circle class="ytopibb5c"/><path class="c1ksu6uqi"/></g>`,
		"fallback": "hugeicons:webcam",
	});
}

export default Component;
