import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awb4th6dw.css';
import '../../css/i/iapyejbey.css';
import '../../css/u/uy1ty_mkg.css';
import '../../css/i/ic9cgybam.css';
import '../../css/l/lgqfcjhjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awb4th6dw"/><circle class="iapyejbey"/><circle class="uy1ty_mkg"/><circle class="ic9cgybam"/><path class="lgqfcjhjs"/>`,
		"fallback": "selfhst:webssh",
	});
}

export default Component;
