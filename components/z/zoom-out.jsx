import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgnd9bw0t.css';
import '../../css/b/bh1hcdbms.css';
import '../../css/g/g2k-h2zlv.css';
import '../../css/h/h9-ebutrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgnd9bw0t wm-a"/><path class="bh1hcdbms wm-k"/><path class="g2k-h2zlv wm-a"/><path class="h9-ebutrh wm-a"/>`,
		"fallback": "withicons-bauhaus:zoom-out",
	});
}

export default Component;
