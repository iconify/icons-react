import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxzmlbuv.css';
import '../../css/w/wr0ronh9v.css';
import '../../css/z/zm910po5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxzmlbuv"/><path class="wr0ronh9v"/><path class="zm910po5a"/>`,
		"fallback": "energy-icons:wind-turbine-bolt-48-bold",
	});
}

export default Component;
