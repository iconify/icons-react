import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijntuqgut.css';
import '../../css/j/jn_5ilyzq.css';
import '../../css/m/mtqm29b0c.css';
import '../../css/n/ncn4mgmjm.css';
import '../../css/g/g3o4iohfd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijntuqgut"/><path class="jn_5ilyzq"/><path class="mtqm29b0c"/><path class="ncn4mgmjm"/><path class="g3o4iohfd"/>`,
		"fallback": "devicon:webgpu",
	});
}

export default Component;
