import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lio503b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lio503b4w"/>`,
		"fallback": "lucide-lab:whisks",
	});
}

export default Component;
