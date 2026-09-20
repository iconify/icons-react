import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obdes7tlt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obdes7tlt"/>`,
		"fallback": "roentgen:y",
	});
}

export default Component;
