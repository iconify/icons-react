import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xt1f8qbvs.css';
import '../../css/m/m4m0k2dmv.css';
import '../../css/r/rgnsfmbfi.css';
import '../../css/i/it2maabhr.css';
import '../../css/h/honh1q8wg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAYq0T9LU"><g class="aql7dnt-u"><path class="xt1f8qbvs"/><path class="m4m0k2dmv"/><path class="rgnsfmbfi"/><path class="it2maabhr"/><path class="honh1q8wg"/></g></mask></defs><path mask="url(#SVGAYq0T9LU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:worker",
	});
}

export default Component;
