import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyj9ftbof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyj9ftbof"/>`,
		"fallback": "gravity-ui:xmark",
	});
}

export default Component;
