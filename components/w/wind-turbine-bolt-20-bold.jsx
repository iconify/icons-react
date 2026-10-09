import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7r7lbpm.css';
import '../../css/j/jy5mj2b4j.css';
import '../../css/v/veivehbuo.css';
import '../../css/q/qy_zasbqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7r7lbpm"/><path class="jy5mj2b4j"/><path class="veivehbuo"/><path class="qy_zasbqw"/>`,
		"fallback": "energy-icons:wind-turbine-bolt-20-bold",
	});
}

export default Component;
