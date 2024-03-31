import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import header from '../../assets/header.png'
import footer from '../.././assets/footer.png'
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function Article() {
  const [fontsLoaded,fontError] = useFonts({
    'Gilroy-Bold': require('../.././assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('../.././assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../.././assets/fonts/Gilroy-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ScrollView className=''>
      <ImageBackground className=' h-96 items-end '  source={header}>
        <View className=' mt-4 mr-12  items-center bg-gray-300  w-12 h-12 rounded-full'>
              <Entypo style={{marginTop:10}} name="share" size={25} color="gray" />
        </View>
        <View className=' mt-2  mr-12 items-center bg-gray-300  w-12 h-12 rounded-full'>
              <AntDesign style={{marginTop:15}} name="heart" size={20} color="gray" />
        </View>
      </ImageBackground>
      
      <View className='ml-5 w-96'>
        <Text  style={{fontFamily:'Gilroy-Bold'}} className=' text-blue-950  text-2xl w-80 '>Cérémonie de remise de trois prix d'excellence </Text>
        <View  className=' flex-row mt-6 text-justify'>
            <Text style={{fontFamily:"Gilroy-Medium"}} className=' text-gray-500  text-base'>
              <AntDesign  name="heart" size={15} color='red' /> 103
            </Text>
        </View>
      </View>

      <View className='ml-4 mt-1 w-80'>
          <Text style={{fontFamily:"Gilroy-Regular"}} className=' text-base  text-gray-400'>
            📣 Le site de ZAIO a organisé le 2 et 3 janvier,
              deux cérémonies de remise de trois prix d’excellence académique, 
              🏆au titre de l’année scolaire 2022 – 2023 :
          </Text>
          <Text style={{fontFamily:"Gilroy-Regular"}} className='text-base text-gray-400'>
            Une première cérémonie organisée 
            à l’association des producteurs de plantes sucrières de BERKANE pour l’octroi du Prix « MINHA TAFAWOQ » 🏆 récompensant le meilleur bachelier 👨🏻‍🎓 enfant d’agriculteur, partenaire de COSUMAR de la région de BERKANE 🧑🏻‍🌾,
            Une deuxième cérémonie organisée à l’association des producteurs de plantes sucrières de NADOR pour :
          </Text>
          <Text style={{fontFamily:"Gilroy-Regular"}} className=' text-base text-gray-400'>
            Le Prix « MINHA TAFAWOQ » 🏆 récompensant le meilleur bachelier 👨🏻‍🎓 enfant d’agriculteur, partenaire de COSUMAR de la région de NADOR 🧑🏻‍🌾,
            Le Prix d’excellence 🏆 au profit du meilleur bachelier 👨🏻‍🎓 issu de la province de Nador,
            📣 En présence de leurs parents et tuteurs, les équipes de l’usine de ZAIO ont décerné les prix aux bacheliers gagnants pour les encourager dans leur futur parcours académique.
          </Text>
      </View>
      <View className='ml-5 mt-5 '>
        <Text style={{fontFamily:'Gilroy-Bold'}} className=' text-lg text-blue-800'>Lire aussi</Text>
        <Image className='mt-2 ml-1' source={footer}/>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}


