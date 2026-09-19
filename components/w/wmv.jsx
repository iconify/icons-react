import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amns9fbxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amns9fbxg"/>`,
		"fallback": "carbon:wmv",
	});
}

export default Component;
