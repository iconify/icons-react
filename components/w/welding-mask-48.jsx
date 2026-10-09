import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmkkkwifn.css';
import '../../css/e/ea_1x7xoc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmkkkwifn"/><path class="ea_1x7xoc"/>`,
		"fallback": "energy-icons:welding-mask-48",
	});
}

export default Component;
