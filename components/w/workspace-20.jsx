import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9_xk5oy.css';
import '../../css/x/xsodzci0j.css';
import '../../css/u/ussgam4hr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9_xk5oy"/><path class="xsodzci0j"/><path class="ussgam4hr"/>`,
		"fallback": "energy-icons:workspace-20",
	});
}

export default Component;
