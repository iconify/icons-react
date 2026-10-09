import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg5nokhli.css';
import '../../css/z/z8uw8db4s.css';
import '../../css/t/t-ygsga4r.css';
import '../../css/m/mc2ksacjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg5nokhli"/><path class="z8uw8db4s"/><path class="t-ygsga4r"/><path class="mc2ksacjx"/>`,
		"fallback": "energy-icons:yurt-48-bold",
	});
}

export default Component;
