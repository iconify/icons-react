import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehev_nbyn.css';
import '../../css/l/l028m6bye.css';
import '../../css/f/fr-8w9hqb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehev_nbyn"/><path class="l028m6bye"/><path class="fr-8w9hqb"/>`,
		"fallback": "devicon:yaml",
	});
}

export default Component;
