import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3-qndq9t.css';
import '../../css/h/hm6x3kk-j.css';
import '../../css/h/hl3yc9npn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3-qndq9t"/><path class="hm6x3kk-j"/><path class="hl3yc9npn"/>`,
		"fallback": "energy-icons:workspace-20-bold",
	});
}

export default Component;
