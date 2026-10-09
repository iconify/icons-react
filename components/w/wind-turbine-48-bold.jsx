import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_rd1qb4t.css';
import '../../css/h/h9o_00b4f.css';
import '../../css/i/inwwqc7mq.css';
import '../../css/n/noixt5w3f.css';
import '../../css/p/pxgzmifcg.css';
import '../../css/m/ms4dadeix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_rd1qb4t"/><path class="h9o_00b4f"/><path class="inwwqc7mq"/><path class="noixt5w3f"/><path class="pxgzmifcg"/><path class="ms4dadeix"/>`,
		"fallback": "energy-icons:wind-turbine-48-bold",
	});
}

export default Component;
