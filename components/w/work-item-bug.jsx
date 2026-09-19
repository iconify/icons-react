import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tihe0h5no.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tihe0h5no"/>`,
		"fallback": "fluent-mdl2:work-item-bug",
	});
}

export default Component;
