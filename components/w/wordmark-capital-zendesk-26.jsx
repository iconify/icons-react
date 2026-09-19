import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3a8fpbxd.css';

const viewBox = {"width":87,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3a8fpbxd"/>`,
		"fallback": "garden:wordmark-capital-zendesk-26",
	});
}

export default Component;
