import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqep3ob2t.css';
import '../../css/p/p9q9isb-a.css';
import '../../css/r/rk00lts6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqep3ob2t"/><path class="p9q9isb-a"/><path class="rk00lts6n"/>`,
		"fallback": "energy-icons:wind-direction-48-bold",
	});
}

export default Component;
