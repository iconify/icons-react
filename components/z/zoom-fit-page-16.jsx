import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag7zob93z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag7zob93z"/>`,
		"fallback": "qlementine-icons:zoom-fit-page-16",
	});
}

export default Component;
