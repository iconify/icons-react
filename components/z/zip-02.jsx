import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9uu65b9i.css';
import '../../css/h/hpd6wbb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9uu65b9i"/><path class="hpd6wbb4d"/></g>`,
		"fallback": "hugeicons:zip-02",
	});
}

export default Component;
