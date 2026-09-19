import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ph6jbci.css';
import '../../css/s/st682lbcm.css';
import '../../css/u/us9ytuuie.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ph6jbci"/><path class="st682lbcm"/><path class="us9ytuuie"/>`,
		"fallback": "devicon-plain:woocommerce",
	});
}

export default Component;
