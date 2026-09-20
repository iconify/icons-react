import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dnf2xg7qk.css';
import '../../css/l/ly9zg-b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dnf2xg7qk"/><path class="ly9zg-b4c"/></g>`,
		"fallback": "keyline-icons:zap-off-two-tone",
	});
}

export default Component;
