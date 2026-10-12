import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3i6zbk6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3i6zbk6l"/>`,
		"fallback": "lucide-extended:zoom-out-filled",
	});
}

export default Component;
