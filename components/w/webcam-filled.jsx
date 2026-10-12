import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/o/o5v0p5v_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="o5v0p5v_l"/>`,
		"fallback": "lucide-extended:webcam-filled",
	});
}

export default Component;
