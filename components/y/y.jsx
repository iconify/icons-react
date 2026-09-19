import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-82kqbql.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-82kqbql"/>`,
		"fallback": "fa7-solid:y",
	});
}

export default Component;
