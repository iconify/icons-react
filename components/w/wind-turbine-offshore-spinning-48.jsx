import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w30mb-bsx.css';
import '../../css/x/xoi6f6nox.css';
import '../../css/p/poe4r5-le.css';
import '../../css/e/ekwadbbdy.css';
import '../../css/l/luqa3jbsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w30mb-bsx"/><path class="xoi6f6nox"/><path class="poe4r5-le"/><path class="ekwadbbdy"/><path class="luqa3jbsv"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-spinning-48",
	});
}

export default Component;
