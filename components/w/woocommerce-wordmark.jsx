import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv3n7ebil.css';
import '../../css/f/f--feebbp.css';
import '../../css/a/abtx30h0p.css';
import '../../css/k/kd7vgqb6g.css';
import '../../css/o/ogs17-uwl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv3n7ebil"/><path class="f--feebbp"/><path class="abtx30h0p"/><path class="kd7vgqb6g"/><path class="ogs17-uwl"/>`,
		"fallback": "devicon:woocommerce-wordmark",
	});
}

export default Component;
