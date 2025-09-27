import { useWidgetSetting } from '@overline-zebar/config';
import {
  FieldDescription,
  FieldInput,
  FieldTitle,
  FormField,
  Switch,
} from '@overline-zebar/ui';

function WorkspacesTab() {
  const [workspaceEnabledIndicator, setWorkspaceEnabledIndicator] =
    useWidgetSetting('main', 'dynamicWorkspaceIndicator');

  return (
    <>
      <FormField switch>
        <FieldTitle>Enabled</FieldTitle>
        <FieldInput>
          <Switch
            checked={workspaceEnabledIndicator}
            onCheckedChange={setWorkspaceEnabledIndicator}
          />
        </FieldInput>
        <FieldDescription>
          Enable the Workspaces widget.
        </FieldDescription>
      </FormField>
    </>
  );
}

export default WorkspacesTab;
