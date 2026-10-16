import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6h-ysber.css';
import '../../css/k/kxtdmfuan.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6h-ysber"/><path class="kxtdmfuan"/>`,
		"fallback": "energy-icons:winch-48",
	});
}

export default Component;
