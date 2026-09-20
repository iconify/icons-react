import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h683xnbcm.css';
import '../../css/i/ima57ac7n.css';
import '../../css/m/mdfbtzb0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h683xnbcm"/><circle class="ima57ac7n"/><path class="mdfbtzb0p"/>`,
		"fallback": "selfhst:youtube-dl",
	});
}

export default Component;
