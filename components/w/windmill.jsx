import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk1fx-k4e.css';
import '../../css/g/gt8biccrk.css';
import '../../css/k/kg64bdngn.css';
import '../../css/w/wihudhbam.css';
import '../../css/s/si8zw661w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="gt8biccrk"/><path class="kg64bdngn"/><path class="wihudhbam"/><path class="si8zw661w"/></g>`,
		"fallback": "icon-park:windmill",
	});
}

export default Component;
