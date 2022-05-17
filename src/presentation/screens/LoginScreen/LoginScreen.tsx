import { Image, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../../../assets/coolabour-logo.png'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Forms/Form'
import { Input } from '../../components/Forms/Input'
import { Text } from '../../components/Text'

const styles = StyleSheet.create({
	container: {
		padding: 30
	},
	logo: {
		alignSelf: 'center'
	},
	form: {
		marginTop: 90
	}
})

export function LoginScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={Logo} style={styles.logo} />
			<View style={styles.form}>
				<Form onSubmit={() => null}>
					<Input placeholder="CPF" name="cpf" style={{ marginBottom: 10 }} />
					<Input placeholder="Password" name="password" style={{ marginBottom: 20 }} />
					<Button onPress={() => null}>Entrar</Button>
				</Form>
			</View>
		</SafeAreaView>
	)
}
