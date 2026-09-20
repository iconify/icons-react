import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4zutccum.css';
import '../../css/j/jxq-gfbkl.css';
import '../../css/k/ku8s4lbtf.css';
import '../../css/z/z9ksytbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4zutccum"/><path class="jxq-gfbkl"/><path class="ku8s4lbtf"/><path class="z9ksytbzl"/></g>`,
		"fallback": "solar:widget-2-linear",
	});
}

export default Component;
