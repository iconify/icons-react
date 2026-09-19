import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw___22ng.css';

const viewBox = {"width":476,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw___22ng"/>`,
		"fallback": "file-icons:zimpl",
	});
}

export default Component;
