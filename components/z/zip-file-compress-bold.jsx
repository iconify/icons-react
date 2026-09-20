import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx9a00_2h.css';
import '../../css/d/drkyq1beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx9a00_2h"/><path class="drkyq1beg"/>`,
		"fallback": "streamline-ultimate:zip-file-compress-bold",
	});
}

export default Component;
