import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5djr2b9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5djr2b9a"/>`,
		"fallback": "qlementine-icons:windows-fill-16",
	});
}

export default Component;
