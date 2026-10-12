import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo9nt9bqw.css';
import '../../css/b/bhq399brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo9nt9bqw"/><path class="bhq399brq"/></g>`,
		"fallback": "lucide-extended:workflow-duotone",
	});
}

export default Component;
