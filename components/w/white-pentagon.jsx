import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg5idf3sf.css';
import '../../css/v/vtcohfdfk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg5idf3sf"/><path class="vtcohfdfk"/>`,
		"fallback": "openmoji:white-pentagon",
	});
}

export default Component;
