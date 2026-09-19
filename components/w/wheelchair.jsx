import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ccg5b4f.css';
import '../../css/a/aoi0h3bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7ccg5b4f"/><path class="aoi0h3bld"/></g>`,
		"fallback": "hugeicons:wheelchair",
	});
}

export default Component;
