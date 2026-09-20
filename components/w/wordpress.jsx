import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi0kacbnn.css';
import '../../css/h/hbzfw6bsy.css';
import '../../css/d/d5dr4t4qq.css';
import '../../css/h/h1zyjc5jp.css';

const viewBox = {"width":122.52,"height":122.523};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mi0kacbnn"><path class="hbzfw6bsy"/><path class="d5dr4t4qq"/><path class="h1zyjc5jp"/></g>`,
		"fallback": "thesvg-color:wordpress",
	});
}

export default Component;
