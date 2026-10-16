import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b46enfdbc.css';
import '../../css/p/pv6xrdqau.css';
import '../../css/r/ry_pmyy0b.css';
import '../../css/i/irk8xhysf.css';
import '../../css/y/y228wxbbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b46enfdbc"/><path class="pv6xrdqau"/><path class="ry_pmyy0b"/><path class="irk8xhysf"/><path class="y228wxbbt"/>`,
		"fallback": "energy-icons:wetland-48",
	});
}

export default Component;
