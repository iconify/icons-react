import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0k0o1c2o.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0k0o1c2o"/>`,
		"fallback": "wi:wmo4680-43",
	});
}

export default Component;
