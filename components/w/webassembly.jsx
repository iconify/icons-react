import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eru_cbbks.css';
import '../../css/g/gnuh1n3mu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eru_cbbks"/><path class="gnuh1n3mu"/>`,
		"fallback": "material-icon-theme:webassembly",
	});
}

export default Component;
